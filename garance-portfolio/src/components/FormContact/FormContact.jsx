import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function FormContact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      window.alert("Veuillez remplir tous les champs avant d'envoyer.");
      return;
    }

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    console.log("Service ID:", serviceId);
    console.log("Template ID:", templateId);
    console.log("Public Key:", publicKey);

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log(result.text);
        window.alert("Votre e-mail a été envoyé avec succès !");
      })
      .catch((error) => {
        console.log(error.text);
        window.alert("Une erreur s'est produite lors de l'envoi de l'e-mail. Veuillez réessayer.");
      });
  };

  return (
    <form
      className="mt-12"
      ref={form}
      onSubmit={sendEmail}>
      <div className="-mx-2 md:items-center md:flex">
        <div className="flex-1 px-2">
          <label className="block mb-2 tex-sm">Nom et Prénom</label>
          <input
            className="block w-full px-5 py-3 mt-2 bg-white border border-gray-200 rounded-md dark:placeholder-martinique-50 dark:bg-martinique-500 dark:text-martinique-50 dark:border-martinique-400 focus:border-martinique-400 dark:focus:border-martinique-50 focus:ring-martinique-50 focus:outline-none focus:ring focus:ring-opacity-40"
            type="text"
            name="user_name"
            placeholder="John Doe"
          />
        </div>
        <div className="flex-1 px-2 mt-4 md:mt-0">
          <label className="block mb-2 tex-sm">Votre adresse mail</label>
          <input
            className="block w-full px-5 py-3 mt-2 bg-white border border-gray-200 rounded-md dark:placeholder-martinique-50 dark:bg-martinique-500 dark:text-martinique-50 dark:border-martinique-400 focus:border-martinique-400 dark:focus:border-martinique-50 focus:ring-martinique-50 focus:outline-none focus:ring focus:ring-opacity-40"
            type="email"
            name="user_email"
            placeholder="johndoe@example.com"
          />
        </div>
      </div>
      <div className="w-full mt-4">
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
        <textarea
          className="block w-full h-32 px-5 py-3 mt-2  bg-white border border-gray-200 rounded-md dark:placeholder-martinique-50 dark:bg-martinique-500 dark:text-martinique-50 dark:border-martinique-400 focus:border-martinique-400 dark:focus:border-martinique-50 focus:ring-martinique-50 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Message"
          name="message"
        />
      </div>
      <input
        className="btn-contact"
        color="contact"
        type="submit"
        value="Envoyer"
      />
    </form>
  );
}
