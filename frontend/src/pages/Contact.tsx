import PrayerRequestForm from '../components/PrayerRequestForm'; // Import the PrayerRequestForm component

const Contact = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="px-6 mx-auto max-w-7xl">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Contact Us</h2>
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact Information Section */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-gray-800">Get in Touch</h3>
            <p className="mb-4 text-gray-600">
              If you have any questions or prayer requests, feel free to reach out to us!
            </p>
            <ul className="text-gray-600">
              <li className="mb-2">
                <strong>Email:</strong> contact@churchname.com
              </li>
              <li className="mb-2">
                <strong>Phone:</strong> +1 234 567 890
              </li>
              <li className="mb-2">
                <strong>Address:</strong> 123 Church Street, City, Country
              </li>
            </ul>
          </div>

          {/* Prayer Request Form Section */}
          <div>
            <PrayerRequestForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
