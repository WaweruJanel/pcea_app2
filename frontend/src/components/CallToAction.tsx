const CallToAction = ({
    message,
    buttonText,
    link,
  }: {
    message: string;
    buttonText: string;
    link: string;
  }) => (
    <section className="py-12 text-center text-white bg-blue-600">
      <p className="mb-4 text-lg">{message}</p>
      <a
        href={link}
        className="px-6 py-3 font-bold text-blue-600 transition-colors bg-white rounded-lg hover:bg-gray-100"
      >
        {buttonText}
      </a>
    </section>
  );
  
  export default CallToAction;
  