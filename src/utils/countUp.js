export async function countUp(element, target, duration = 800) {

    const start = 0;
    const startTime = performance.now();

    function animate(currentTime) {

        const elapsed = currentTime - startTime;

        const progress = Math.min(elapsed / duration, 1);

        const value = Math.floor(start + (target - start) * progress);

        element.textContent = value;

        if (progress < 1) {

            requestAnimationFrame(animate);

        }

    }

    requestAnimationFrame(animate);

}