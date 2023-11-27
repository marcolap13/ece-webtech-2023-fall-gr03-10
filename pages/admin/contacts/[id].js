import { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import md from "markdown-it";
import Layout from "../../../components/Layout.js";

export default function Contacts({ id }) {
  const [contact, setContact] = useState();
  const supabase = useSupabaseClient();

  useEffect(() => {
    const fetchContact = async () => {
      try {
        let { data, error, status } = await supabase
          .from("contacts")
          .select(`id, firstname, lastname, email, message`)
          .eq('id', id)
          .single();

        if (error) {
          console.error('Error fetching contact:', error);
          return;
        }

        setContact(data);
      } catch (error) {
        console.error('Error fetching contact:', error);
      }
    };

    fetchContact();
  }, [id, supabase]);

  return (
    <Layout title="Admin Contacts" description="Generated by create next app">
      <h1 className="wt-title">Contact message</h1>
      {contact && (
        <div className="overflow-hidden divide-y divide-slate-200 shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <div className="bg-slate-50">
            <dl className="grid grid-cols-[auto_1fr] px-3 py-4 [&_dt]:italic [&_dt]:text-slate-500 [&_dt]:pr-3">
              <dt>Name</dt>
              <dd>
                {contact.lastname}, {contact.firstname}
              </dd>
              <dt>Email</dt>
              <dd>{contact.email}</dd>
            </dl>
          </div>
          <div className="px-3 py-10 bg-white">
            {typeof contact.message === 'string' ? (
              <div dangerouslySetInnerHTML={{ __html: md().render(contact.message) }} />
            ) : (
              <p>Contact message is not a valid string: {JSON.stringify(contact.message)}</p>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      id: context.params.id,
    },
  };
}