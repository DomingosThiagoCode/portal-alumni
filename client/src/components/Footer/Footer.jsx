import React from 'react';
import { Linkedin, Facebook, Youtube, Instagram } from 'lucide-react';
import styles from './Footer.module.css';

// 1. Importando os arquivos locais usando caminhos relativos
import termosUso from '../../assets/01_Termos_de_Uso.docx?url';
import politicaPrivacidade from '../../assets/02_Politica_de_Privacidade.docx?url';
import memorandoAdequacao from '../../assets/03_Memorando_Adequacao_LGPD.docx?url';
import termoConsentimento from '../../assets/04_Termo_de_Consentimento.docx?url';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Lado Esquerdo: Informações Institucionais */}
        <div className={styles.leftSection}>
          <strong>
            Associação dos ex-alunos do Instituto Militar de Engenharia
          </strong>
          <span>Apoiando o IME e a comunidade IMEana.</span>
          <span>© 2024 Alumni IME. Todos os direitos reservados.</span>
          <span>CNPJ: 19.335.957/0001-17</span>
          
          {/* Agrupamento opcional para organizar melhor os links no flexbox */}
          
        </div>

        {/* Lado Direito: Social e Links */}
        <div className={styles.rightSection}>
          <div className={styles.socialIcons}>
            <a
              href="https://www.linkedin.com/company/alumniime"
              target="_blank"
              rel="noreferrer"
              className={styles.iconCircle}
            >
              <Linkedin size={23} fill="currentColor" strokeWidth={0} />
            </a>
            <a
              href="https://www.facebook.com/AlumniIME"
              target="_blank"
              rel="noreferrer"
              className={styles.iconCircle}
            >
              <Facebook size={23} fill="currentColor" strokeWidth={0} />
            </a>
            <a
              href="https://www.youtube.com/c/AlumniIME/featured"
              target="_blank"
              rel="noreferrer"
              className={styles.iconCircle}
            >
              <Youtube size={23} strokeWidth={2.5} />
            </a>
            <a
              href="https://www.instagram.com/alumniime/"
              target="_blank"
              rel="noreferrer"
              className={styles.iconCircle}
            >
              <Instagram size={23} strokeWidth={2.5} />
            </a>
          </div>

          
          <div className={styles.docsContainer}>
            <a href={termosUso} download className={styles.legalLink}>
              Termos de Uso
            </a>
            <a href={politicaPrivacidade} download className={styles.legalLink}>
              Política de Privacidade
            </a>
            <a href={memorandoAdequacao} download className={styles.legalLink}>
              Memorando de Adequação
            </a>
            <a href={termoConsentimento} download className={styles.legalLink}>
              Termo de Consentimento
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;