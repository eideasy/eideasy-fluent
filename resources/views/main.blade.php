@extends('app')

@section('content')
    <main class="flex-grow">
        <div class="max-w-3xl mx-auto px-4 sm:px-6">
            @include('hero')
        </div>

        <div class="bg-gray-100 pt-20 pb-20">
            <div class="max-w-6xl mx-auto px-4 sm:px-6">
                @include('steps')
            </div>
        </div>

        <div class="pt-20 pb-20">
            <div class="max-w-6xl mx-auto px-4 sm:px-6">
                @include('developers')
            </div>
        </div>
    </main>
@endsection
