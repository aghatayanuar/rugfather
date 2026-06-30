export async function typewriter(element, text, speed = 18) {

    element.textContent = "";

    for (const char of text) {

        element.textContent += char;

        await new Promise(resolve => setTimeout(resolve, speed));

    }

}