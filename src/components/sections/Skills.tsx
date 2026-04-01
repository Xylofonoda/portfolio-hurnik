import { frontendSkills, overallSkills } from "../../consts/Skills";
import SkillsAcquired from "../helper-components/SkilllsAcquired";
import Column from "../helper-components/Column";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <Column title={t.columns.skills}>
      <div className="space-y-8">
        <div>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-muted)" }}>
            {t.skills.bio}
          </p>
        </div>
        <SkillsAcquired acquiredSkills={frontendSkills} typeOfSkills={t.skills.frontend} />
        <SkillsAcquired acquiredSkills={overallSkills} typeOfSkills={t.skills.other} />
      </div>
    </Column>
  );
};

export default Skills;
