import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface Props {
  sitekey: string;
  onChange: (token: string | null) => void;
}

const Recaptcha: React.FC<Props> = ({ sitekey, onChange }) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  
  const handleChange = (token: string | null) => {
    onChange(token);
  };

  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      sitekey={sitekey}
      onChange={handleChange}
    />
  );
};

export default Recaptcha;
