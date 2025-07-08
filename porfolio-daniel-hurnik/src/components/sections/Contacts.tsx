import React from "react";
import emailjs from "emailjs-com";
import RevealOnScroll from "../helper-components/RevealOnScroll";
import { useFormik, type FormikValues } from 'formik';
import { createAttach } from "../../helper-functions/CreateAttach";
import toast from "react-hot-toast";
import Spinner from "../helper-components/Spinner";
import SectionTitle from "../helper-components/SectionTitle";
import { Mail, MapPin, Phone } from "lucide-react";

interface FormikProps {
    userName: string;
    email: string;
    message: string;
}

const Contacts = () => {

    const [isSending, setIsSending] = React.useState(false)

    const formik = useFormik<FormikProps>({
        initialValues: {
            userName: "",
            email: "",
            message: ""
        },
        onSubmit: handleSubmit,
        validateOnBlur: false,
        validateOnChange: false,
        validateOnMount: false
    });

    const attach = createAttach(formik);

    async function handleSubmit(values: FormikValues) {
        setIsSending(true)
        try {
            await emailjs
                .send(
                    import.meta.env.VITE_SERVICE_ID,
                    import.meta.env.VITE_TEMPLATE_ID,
                    {
                        name: values.userName,
                        email: values.email,
                        message: values.message,
                        time: Date.now().toLocaleString()
                    },
                    import.meta.env.VITE_PUBLIC_KEY
                )
                .then(() => {
                    toast.success("Message successfully sent!", {
                        position: "bottom-right",
                        style: {
                            border: "1px solid",
                            borderColor: "#22c55e",
                            background: "#000",
                            color: "#fff",
                        },
                    })
                    setIsSending(false);
                    formik.setValues(formik.initialValues)
                })
        }
        catch (error) {
            setIsSending(false);
            toast.error((error ? String(error) : "Oops, something went wrong.."), {
                position: "bottom-right",
                style: {
                    border: "1px solid",
                    borderColor: "#ef4444",
                    background: "#000",
                    color: "#fff"
                }
            })
        }
    }

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="px-4 w-full min-w-[500px] md:w-[700px] sm:w-2/3 p-6">
                    <SectionTitle title={"Get In Touch"} />
                    <div className="grid grid-cols-1 md:grid-cols-2 md:justify-center">
                        <div className="space-y-8">
                            <h3 className="text-2xl font-semibold mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Mail className="h-6 w-6 text-blue-500" />{" "}
                                    </div>
                                    <div>
                                        <h4 className="font-medium"> Email</h4>
                                        <a
                                            href="mailto:daniel.gurnik@gmail.com"
                                            className="hover:text-blue-500 transition-colors"
                                        >
                                            daniel.gurnik@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Phone className="h-6 w-6 text-blue-500" />{" "}
                                    </div>
                                    <div>
                                        <h4 className="font-medium"> Phone</h4>
                                        <a
                                            href="tel:+420608400842"
                                            className="hover:text-blue-500 transition-colors"
                                        >
                                            +420 608 400 842
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <MapPin className="h-6 w-6 text-blue-500" />{" "}
                                    </div>
                                    <div>
                                        <h4 className="font-medium"> Location</h4>
                                        <a className="hover:text-blue-500 transition-colors">
                                            {"Ostrava, Czechia -> Tartu, Estonia"}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-0 md:mt-0 sm:mt-8">
                            <form className="space-y-6" onSubmit={formik.handleSubmit}>
                                <div className="relative">
                                    <input
                                        {...attach("userName")}
                                        id={"userName"}
                                        name={"userName"}
                                        type={"text"}
                                        required
                                        value={formik.values.userName}
                                        className={`w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5`}
                                        placeholder={"Write your name"}
                                    />
                                </div>

                                <div className="relative">
                                    <input
                                        {...attach("email")}
                                        id={"email"}
                                        name={"email"}
                                        type={"email"}
                                        required
                                        value={formik.values.email}
                                        className={`w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5`}
                                        placeholder={"example@example.com"}
                                    />
                                </div>

                                <div className="relative">
                                    <textarea
                                        {...attach("message")}
                                        id={"message"}
                                        name={"message"}
                                        required
                                        rows={5}
                                        value={formik.values.message}
                                        className={`w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5`}
                                        placeholder={"Write your message.."}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                                >
                                    {isSending ? <Spinner /> : "Send Message"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default Contacts