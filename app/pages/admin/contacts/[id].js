// pages/admin/contacts/[id].js

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../../utils/supabaseClients';
import md from 'markdown-it';

export default function ContactDetail() {
  const [contact, setContact] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return; // Exit if id is not available

    const fetchContact = async () => {
      try {
        let { data, error } = await supabase
          .from('contacts')
          .select('id, firstname, lastname, email, message')
          .eq('id', id)
          .single();

        if (error) throw error;

        setContact(data);
      } catch (error) {
        console.error('Error fetching contact:', error.message);
      }
    };

    fetchContact();
  }, [id]);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-20">
      <h1 className="wt-title text-black ">Contact Detail</h1>
      <div className="overflow-hidden divide-y text-black divide-slate-200 shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
        <div className="bg-slate-50 p-4">
          <p><strong>Name:</strong> {contact.firstname} {contact.lastname}</p>
          <p><strong>Email:</strong> {contact.email}</p>
        </div>
        <div className="p-4 bg-white">
          <h2 className="text-lg font-bold">Message:</h2>
          <div dangerouslySetInnerHTML={{ __html: md().render(contact.message) }} />
        </div>
      </div>
    </div>
  );
}
