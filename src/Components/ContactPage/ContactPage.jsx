import Grid from './Grid';
import SendMessage from './SendMessage';
import { useState, useEffect } from 'react';

const ContactPage = () => {
    const [showForm, setForm] = useState(false);
    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setForm(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    return(
        <section id="contact" className="flex snap-center min-h-dvh lg:p-25 sm:p-15 transition-all justify-center py-13">
            <Grid setForm={setForm} showForm={showForm}/>
            <SendMessage setForm={setForm} showForm={showForm}/>
        </section>
    );
}
export default ContactPage;