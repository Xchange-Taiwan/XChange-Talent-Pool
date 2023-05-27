'use client';
import { Form, Formik } from 'formik';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

import Button from '../signIn/components/Button';
import CheckBoxField from '../signIn/components/CheckBoxField';
import DivideLine from '../signIn/components/DivideLine';
import TextField from '../signIn/components/TextField';

const LogInPage = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-6 text-2xl font-bold leading-9 tracking-tight text-gray-900">
          註冊
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={{
            account: '',
            password: '',
            toggle: false,
          }}
          onSubmit={async (params, { setSubmitting }) => {
            await signIn('credentials', {
              callbackUrl: '/Dashboard',
              ...params,
            });
            setSubmitting(false);
          }}
        >
          <Form>
            <TextField
              id="account"
              type="text"
              fieldName="account"
              labelText="電子郵件地址"
              placeholder="請填入您的E-mail"
            />
            <TextField
              id="password"
              type="password"
              fieldName="password"
              labelText="密碼"
              placeholder="請輸入密碼"
            />
            <CheckBoxField
              id="rememberMe"
              fieldName="toggle"
              labelText={
                <>
                  我了解並同意{' '}
                  <span className="cursor-pointer  font-bold underline underline-offset-4">
                    X-talent 服務條款
                  </span>
                </>
              }
            />
            <div className="py-4">
              <Button type="submit" buttonText="註冊" />

              <p className="pt-6 text-center text-slate-500">
                已經有帳號了 ?{' '}
                <Link
                  href="/signIn"
                  className="font-bold text-slate-800 underline underline-offset-4 hover:text-slate-700"
                >
                  登入
                </Link>
              </p>
            </div>
          </Form>
        </Formik>

        <DivideLine />

        <div className="mt-6 flex flex-col gap-6">
          <Button
            variant="GOOGLE"
            type="button"
            buttonText="使用 Google 繼續"
          />
          <Button
            variant="LINKEDIN"
            type="button"
            buttonText="使用 LinkedIn 繼續"
          />
        </div>
      </div>
    </div>
  );
};

export default LogInPage;