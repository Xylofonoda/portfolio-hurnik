import React from "react";
import emailjs from "emailjs-com";
import { useFormik, type FormikValues } from 'formik';
import { createAttach } from "../../helper-functions/CreateAttach";
import toast from "react-hot-toast";
import Spinner from "../helper-components/Spinner";
import Column from "../helper-components/Column";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";

interface FormikProps {
    userName: string;
    email: string;
    message: string;
}

const Contacts = () => {

    const { language } = useLanguage();
    const t = translations[language];

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
                            background: "#111",
                            color: "#e2e2e2",
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
                    background: "#111",
                    color: "#e2e2e2"
                }
            })
        }
    }

    return (
        <Column title={t.columns.contact}>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-muted)" }}>
                {t.contact.intro}
            </p>
            <div className="space-y-4 text-sm mb-8">
                <div>
                    <p className="text-xs uppercase tracking-[0.15em] mb-1" style={{ color: "var(--color-dim)" }}>{t.contact.emailLabel}</p>
                    <a
                        href="mailto:daniel.gurnik@gmail.com"
                        className="transition-colors duration-200"
                        style={{ color: "var(--color-muted)" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "var(--color-muted)")}
                    >
                        daniel.gurnik@gmail.com
                    </a>
                </div>
                <div>
                    <p className="text-xs uppercase tracking-[0.15em] mb-1" style={{ color: "var(--color-dim)" }}>{t.contact.phoneLabel}</p>
                    <a
                        href="tel:+420608400842"
                        className="transition-colors duration-200"
                        style={{ color: "var(--color-muted)" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "var(--color-muted)")}
                    >
                        +420 608 400 842
                    </a>
                </div>
                <div>
                    <p className="text-xs uppercase tracking-[0.15em] mb-1" style={{ color: "var(--color-dim)" }}>{t.contact.locationLabel}</p>
                    <span style={{ color: "var(--color-muted)" }}>{t.contact.locationValue}</span>
                </div>
            </div>

            <div className="pt-6" style={{ borderTop: "1px solid var(--color-border)" }}>
                <form className="space-y-3" onSubmit={formik.handleSubmit}>
                    <input
                        {...attach("userName")}
                        id="userName"
                        name="userName"
                        type="text"
                        required
                        value={formik.values.userName}
                        className="w-full bg-transparent rounded px-3 py-2 text-sm focus:outline-none transition-colors duration-200"
                        style={{
                            color: "var(--color-text)",
                            border: "1px solid var(--color-border-input)",
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = "var(--color-border-strong)")}
                        onBlur={e => (e.currentTarget.style.borderColor = "var(--color-border-input)")}
                        placeholder={t.contact.namePlaceholder}
                    />
                    <input
                        {...attach("email")}
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formik.values.email}
                        className="w-full bg-transparent rounded px-3 py-2 text-sm focus:outline-none transition-colors duration-200"
                        style={{
                            color: "var(--color-text)",
                            border: "1px solid var(--color-border-input)",
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = "var(--color-border-strong)")}
                        onBlur={e => (e.currentTarget.style.borderColor = "var(--color-border-input)")}
                        placeholder={t.contact.emailPlaceholder}
                    />
                    <textarea
                        {...attach("message")}
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formik.values.message}
                        className="w-full bg-transparent rounded px-3 py-2 text-sm focus:outline-none transition-colors duration-200 resize-none"
                        style={{
                            color: "var(--color-text)",
                            border: "1px solid var(--color-border-input)",
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = "var(--color-border-strong)")}
                        onBlur={e => (e.currentTarget.style.borderColor = "var(--color-border-input)")}
                        placeholder={t.contact.messagePlaceholder}
                    />
                    <button
                        type="submit"
                        className="text-sm rounded px-5 py-2.5 transition-opacity duration-200 hover:opacity-70 w-full"
                        style={{
                            color: "var(--color-text)",
                            border: "1px solid var(--color-border-strong)",
                        }}
                    >
                        {isSending ? <Spinner /> : t.contact.submit}
                    </button>
                </form>
            </div>
        </Column>
    );
};

export default Contacts