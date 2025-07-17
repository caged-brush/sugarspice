import React from "react";

const Etiquette = () => {
  return (
    <div className="bg-white w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 p-4 sm:p-8 h-[1200px] mx-auto lg:mx-0">
      <h1 className="text-lg sm:text-xl font-bold">Spa Etiquette</h1>
      <div className="mt-4">
        <p>
          Please fill out any intake forms sent to you by email, If you happen
          to be running behind or need to make any changes to your appointment,
          please give us a courtesy call as this time has been specially
          reserved for you. Our technicians will do our best to accommodate late
          appointments, however treatment time may be shortened with respect to
          the next guests&apos; appointment.
        </p>
        <br />
        <p>
          We recommend arriving without eye makeup for our signature lash and
          brow services if possible. Please bring comfy open-toed shoes to slip
          into after any treats for the feet.
        </p>
        <br />
        <p>
          For your comfort and that of our other guests please turn off or
          silence your cell phone. We also ask that you make other arrangements
          for your children unless they are there for an appointment and
          accompanied by an adult. Pets of any kind are not allowed.
        </p>
        <hr className="mt-4" />
        <p className="mt-4 italic">
          Please be advised of our 24 hour cancellation policy. In the event
          that you need to cancel, reschedule, or make changes to your
          appointment, please contact our team directly at the shop so we can
          accommodate your needs. Last minute cancellations of scheduled
          appointment times will result in a 50% service fee and No Shows will
          result in a 100% service fee. These fees will be charged directly to
          your CC that we have on file. Your CC will only be charged on the
          account that you miss your scheduled service.
        </p>
      </div>
    </div>
  );
};

export default Etiquette;
