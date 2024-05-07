import React, { useState } from "react";
import "./TelegramSection.scss";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { sendMessage } from "../../utils/sendMessage";

const initForm = {
  name: "",
  phone: "",
  email: "",
}
export const TelegramSection = () => {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(initForm);

  const onChange = (e, key) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const onSubmit = async () => {
    setLoading(true);
    const text = `
Имя: ${form.name}
Телефон: ${form.phone}
Email: ${form.email}
    `
    await sendMessage(text);
    setLoading(false);
    setForm(initForm);
    setChecked(false);
  }
  return (
    <div style={{ paddingBottom: "100px" }}>
      <div className="telegram-section">
        <div className="ts-info">
          <div className="ts-title">Оставьте заявку, и мы с вами свяжемся!</div>
          <div className="ts-text">
            Позвоним в течение 30 минут в рабочее время — с 8:00 до 21:00.
            Задавайте любые вопросы, а мы ответим и поможем подобрать занятия
          </div>
        </div>
        <div className="ts-form">
          <Input
            value={form.name}
            onChange={(e) => onChange(e, "name")}
            className="ts-input"
            placeholder="Имя *"
            name="name"
          />
          <Input
            value={form.phone}
            onChange={(e) => onChange(e, "phone")}
            className="ts-input"
            placeholder="Номер телефона"
            name="phone"
          />
          <Input
            value={form.email}
            onChange={(e) => onChange(e, "email")}
            className="ts-input"
            placeholder="Электронная почта"
            name="email"
          />

          <div className="ts-checkbox">
            <input
              className="checkbox"
              type="checkbox"
              id="check"
              checked={checked}
              onChange={() => setChecked(prev => !prev)}
            />
            <label htmlFor="check" />
            <div>
              Принимаю условия <a href="/#">соглашения</a> и даю  
              <a href="/#">
                согласие на обработку своих персональных данных  на условиях
                политики конфиденциальности
              </a>
            </div>
          </div>

          <Button
            onClick={onSubmit}
            className={"ts-form-btn"}
            colorHEX="#D3E09A"
            label="Отправить заявку"
            disabled={!checked || !form.name.length || loading}
          />
        </div>
      </div>
    </div>
  );
};
