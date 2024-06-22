import { buildUpdateForm } from "../posts/tools/buildUpdateForm.mjs";

export default function postUpdate(button, post, id, data) {

    try {

        const updateButton = button;

        updateButton.addEventListener('click', async () => {

            buildUpdateForm(post, data);

        });


    } catch (error) {
        console.error(error);
    }
};