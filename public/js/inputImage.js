function updateFileName(input) {
    const fileName = input.value.split('\\').pop();
    document.getElementById('file-selected').textContent = fileName ? ' | ' + fileName : '';
}