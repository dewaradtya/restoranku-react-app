import React from "react";
import JobOpening from "./job-opening";

const jobOpenings = [
  {
    id: 1,
    title: "Koki (Chef)",
    description:
      "Bertanggung jawab dalam menyajikan masakan dengan kualitas terbaik. Memiliki pengalaman dalam memasak berbagai hidangan.",
    requirements: [
      "Pengalaman minimal 2 tahun sebagai Koki.",
      "Mampu bekerja dalam tim.",
      "Mahir dalam masakan Indonesia dan Internasional.",
    ],
    howToApply:
      "Kirimkan CV dan surat lamaran Anda ke email: hrd@restoranku.com",
    type: "Full-time",
    location: "Jakarta",
    department: "Kitchen",
  },
  {
    id: 2,
    title: "Pelayan (Waiter/Waitress)",
    description:
      "Melayani pelanggan dengan ramah, memastikan pesanan tercatat dengan baik, dan menjaga kebersihan area restoran.",
    requirements: [
      "Pengalaman minimal 1 tahun di restoran atau hotel.",
      "Berpenampilan rapi dan sopan.",
      "Mampu berkomunikasi dengan baik dan ramah terhadap pelanggan.",
    ],
    howToApply:
      "Kirimkan CV dan surat lamaran Anda ke email: hrd@restoranku.com",
    type: "Full-time",
    location: "Jakarta",
    department: "Service",
  },
  {
    id: 3,
    title: "Kasir (Cashier)",
    description:
      "Bertanggung jawab atas pencatatan transaksi dan penanganan pembayaran dari pelanggan dengan teliti.",
    requirements: [
      "Pengalaman sebagai kasir minimal 1 tahun.",
      "Teliti dan jujur dalam bekerja.",
      "Memiliki kemampuan komunikasi yang baik.",
    ],
    howToApply:
      "Kirimkan CV dan surat lamaran Anda ke email: hrd@restoranku.com",
    type: "Full-time",
    location: "Jakarta",
    department: "Finance",
  },
];

const JobListings = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Lowongan Kerja Tersedia
      </h2>
      <div className="grid gap-6">
        {jobOpenings.map((job) => (
          <JobOpening key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobListings;
