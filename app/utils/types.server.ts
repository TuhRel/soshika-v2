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
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string
}