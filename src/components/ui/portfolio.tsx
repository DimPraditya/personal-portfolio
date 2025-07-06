import React from "react";

const PortfolioProject = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 space-y-6 font-sans">
      <h1 className="text-3xl font-bold ">Appointment Booking System for MedicaCare Clinics</h1>

      <div>
        <h2 className="text-2xl font-semibold">Technologies</h2>
        <p className="text-justify mt-2 text-xl">Next.js, TypeScript, PostgreSQL, Tailwind CSS, Supabase, Vercel</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Situation</h2>
        <p className="text-justify mt-2 text-xl">
          MedicaCare, a growing network of private clinics, needed a digital solution to replace their manual appointment
          booking system. They were facing frequent scheduling conflicts, long wait times, and limited patient visibility into
          doctor availability. The new system needed to be secure, responsive, and easy to use for both staff and patients.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Task</h2>
        <p className="text-justify mt-2 text-xl">
          As the lead developer, I was tasked with designing and developing a full-stack web application that allows patients to
          book appointments, view schedules, and receive real-time confirmations. Admins needed control over doctors'
          availability, appointment types, and patient records.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Action</h2>
        <p className="text-justify mt-2 text-xl">
          I used <strong>Next.js with TypeScript</strong> to build a performant and SEO-friendly web application. The front end
          was styled using <strong>Tailwind CSS</strong> for quick prototyping and consistent design. On the back end, I
          implemented <strong>PostgreSQL</strong> via <strong>Supabase</strong> to manage users, appointments, and medical
          records. I added authentication using Supabase Auth with role-based access control for patients and admins. The app
          was deployed on <strong>Vercel</strong> with environment-based configurations. I also implemented email notifications
          and calendar syncing with Google Calendar API. During development, I collaborated with a UX designer and conducted
          user testing sessions with actual clinic staff.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Result</h2>
        <p className="text-justify mt-2 text-xl">
          The system reduced scheduling errors by 70% and eliminated double bookings entirely. Patient satisfaction improved due
          to the simplified booking experience, and clinic staff saved significant time previously spent coordinating
          appointments manually. The solution has since been adopted by two additional clinics in the network.
        </p>
      </div>
    </section>
  );
};

export default PortfolioProject;
