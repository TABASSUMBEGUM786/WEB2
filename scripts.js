<!-- Add this script to the end of your HTML body, before the closing </body> tag -->
<script>
    document.querySelectorAll('.color-section').forEach(section => {
        section.addEventListener('click', () => {
            section.style.backgroundColor = getRandomColor();
        });
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
</script>
