@extends('app')

@section('content')
    <main class="flex-grow">
        <div class="max-w-3xl mx-auto px-4 sm:px-6">
            <div class="text-center pt-32 pb-24">
                <h1 class="text-5xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate">
                    Sign with any of the following methods
                </h1>
            </div>
        </div>

        <div class="max-w-4xl mx-auto px-4 sm:px-6">
            <div class="text-center pb-48 flex flex-wrap justify-center">
                @foreach ($availableMethods as $method)
                    <div class="mx-2 my-2">
                        @include('method-button', ['text' => $method, 'docId' => $docId])
                    </div>
                @endforeach
            </div>
        </div>


        <script>
          const docId = {!! json_encode($docId) !!};
          const buttons = Array.from(document.querySelectorAll('[data-action-type]'));
          buttons.forEach((button) => {
            button.addEventListener('click', (e) => {
              e.preventDefault();
              const actionType = button.dataset.actionType;
              // TODO:
              console.log(`Start actionType: ${actionType}, for docId: ${docId}`);
            });
          });

        </script>

    </main>
@endsection
