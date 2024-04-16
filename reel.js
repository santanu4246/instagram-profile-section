

document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll(".video");
    
    videos.forEach(video => {
        video.addEventListener('click', () => {

            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
        
        // Additional logic to handle video playback based on visibility
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.play();
                } else {
                    entry.target.pause();
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(video);
    });
});
