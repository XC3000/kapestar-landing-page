import React from "react";
import Layout from "../Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="container mt-5">
        <h3>Privacy Policy</h3>
        <p className="text-muted">Last updated on Mar 31st 2023</p>

        <p>
          At Kapestar, we are committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, and share information about you
          when you use our salon booking app (the "App").
        </p>
        <h2>Information We Collect</h2>
        <p>We may collect the following types of information from you:</p>
        <ul>
          <li>
            Personal Information: This may include your name, email address,
            phone number, and other contact information.
          </li>
          <li>
            Appointment Information: This may include the date, time, location,
            and services requested for your appointment.
          </li>
          <li>
            Device Information: This may include information about the device
            you use to access the App, such as the type of device, operating
            system, and browser.
          </li>
          <li>
            Usage Information: This may include information about how you use
            the App, such as the pages you visit, the features you use, and the
            actions you take.
          </li>
          <li>
            Location Information: We may collect information about your location
            with your permission to enable certain features of the App.
          </li>
          <li>
            Camera Information: We may collect information from your device's
            camera with your permission to enable certain features of the App.
          </li>
        </ul>
        <h2>How We Use Your Information</h2>
        <p>We may use your information for the following purposes:</p>
        <ul>
          <li>
            To provide the services you request through the App, including
            booking and managing salon appointments.
          </li>
          <li>To improve the App and the services we offer.</li>
          <li>
            To communicate with you about your appointments and our services.
          </li>
          <li>
            To send you promotional materials and other communications that may
            be of interest to you, only if you have provided your consent to
            receive such communications.
          </li>
          <li>
            To comply with legal obligations and to protect our rights and
            interests.
          </li>
        </ul>
        <h2>Sharing Your Information</h2>
        <p>
          We may share your information with third parties in the following
          circumstances:
        </p>
        <ul>
          <li>
            With salon owners and staff members who are involved in providing
            the services you request through the App.
          </li>
          <li>
            With service providers who help us operate and maintain the App.
          </li>
          <li>
            With third parties who provide promotional materials and other
            communications that may be of interest to you, only if you have
            provided your consent to receive such communications.
          </li>
          <li>
            With law enforcement and other government authorities to comply with
            legal obligations or to protect our rights and interests.
          </li>
          <li>
            In connection with a business transaction, such as a merger,
            acquisition, or sale of assets.
          </li>
        </ul>
        <h2>Your Choices</h2>
        <p>
          You can choose not to provide us with certain information, but this
          may limit your ability to use certain features of the App.
        </p>
        <p>
          You can also choose to opt-out of receiving promotional materials and
          other communications from us by following the instructions provided in
          those communications.
        </p>
        <h2>Security</h2>
        <p>
          We take reasonable measures to protect your information from
          unauthorized access, use, or disclosure. However, no method of
          transmission over the internet or electronic storage is completely
          secure, and we cannot guarantee the absolute security of your
          information.
        </p>
        <h2>Changes to this Privacy Policy</h2>

        <p>
          We may update this Privacy Policy from time to time by posting a new
          version on our website or within the App. Your continued use of the
          App after any such changes constitutes your acceptance of the new
          Privacy Policy.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at{" "}
          <a href="mailto:contact@kapestar.com">contact@kapestar.com</a>.
        </p>
      </div>
    </Layout>
  );
};

export default Policy;
