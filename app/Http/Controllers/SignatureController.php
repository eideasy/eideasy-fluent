<?php

namespace App\Http\Controllers;
use App\Models\SigningProcess;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class SignatureController extends Controller
{
    private $guzzle;

    public function __construct(
        Client $guzzle = null
    )
    {
        $this->guzzle   = $guzzle;
    }

    public function createAndGoToSigningView(Request $request)
    {
        $request->validate([
            'file_to_be_signed'  => 'required|file',
        ]);

        $fileInfo = $request->file('file_to_be_signed');

        $filePreparationResponse = $this->guzzle->post(config('eideasy.api_url') . '/api/signatures/prepare-files-for-signing', [
            'headers' => [
                'Accept' => 'application/json'
            ],
            'json' => [
                'files' => [
                    [
                        'fileContent' => base64_encode(file_get_contents($fileInfo->path())),
                        'fileName' => $fileInfo->getClientOriginalName(),
                        'mimeType' => $fileInfo->getMimeType(),
                    ]
                ],
                'client_id' => config('eideasy.client_id'),
                'secret' => config('eideasy.secret'),
                'return_available_methods' => true,
                'container_type' => 'pdf'
            ],
        ]);

        $responseData = json_decode($filePreparationResponse->getBody()->getContents(), true);

        $signingProcess = new SigningProcess;
        $signingProcess->doc_id = $responseData['doc_id'];
        $signingProcess->available_methods = $responseData['available_methods'];
        $signingProcess->save();

        return redirect('/sign?doc_id=' . $responseData['doc_id'],);
    }

    public function renderSigningView(Request $request)
    {
        $docId = $request->input('doc_id');
        $clientId = config('eideasy.client_id');
        $apiUrl = config('eideasy.api_url');

        $signingProcess = SigningProcess::where('doc_id', $docId)->first();
        return view('sign', [
            'clientId' => $clientId,
            'docId' => $docId,
            'apiUrl' => $apiUrl,
            'availableMethods' => $signingProcess->available_methods
        ]);
    }
}
