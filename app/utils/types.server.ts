export type RegisterForm = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  username: string
}

export type LoginForm = {
  email: string;
  password: string
}

export type ContactForm = {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  message: string;
  service: string
}