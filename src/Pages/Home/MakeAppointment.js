import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 px-5">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-3xl pb-5 text-white py-5">
          Make an Appointment Today
        </h2>
        <p className="text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A facilis ea
          adipisci voluptatibus id labore odit vel iure eligendi deleniti ab
          sint reiciendis aliquid ut qui repudiandae consequuntur hic, rerum
          iste ipsam natus perferendis reprehenderit harum. Nemo maxime facere
          dolorum.
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
