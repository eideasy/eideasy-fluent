<form method="POST" enctype="multipart/form-data">
    {{csrf_field()}}

    <div class="text-center mb-10">
        <input
                name="file_to_be_signed"
                type="file"
                id="file_to_be_signed"
                accept="application/pdf"
                class="border border-solid border-2 border-blue-300 rounded px-3 py-1.5 text-base max-w-xs"
        >
    </div>

    <div class="text-center">
        <button
                type="submit"
                class="inline-flex
                        justify-center
                        py-3
                        px-7
                        border
                        border-transparent
                        shadow-sm
                        text-2xl
                        font-medium
                        rounded-md
                        text-white
                        bg-blue-600
                        hover:bg-blue-700
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-blue-500"
        >
            <span>Sign</span>
        </button>
    </div>
</form>
