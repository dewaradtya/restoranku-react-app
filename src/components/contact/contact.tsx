import React from "react";
import ContactInfo from './info';
import ContactForm from './contact-form';

const Contacts = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-white min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Hubungi kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ada pertanyaan? Kami ingin mendengar pendapat Anda. Kirimkan pesan
            kepada kami dan kami akan membalasnya sesegera mungkin.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ContactInfo />
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;