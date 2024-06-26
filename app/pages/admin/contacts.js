import { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { supabase } from '../../utils/supabaseClients';
import { ChevronRightIcon } from '@heroicons/react/outline';

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        let { data, error, status } = await supabase
          .from('contacts')
          .select('id, firstname, lastname, email');

        if (error) {
          console.error('Error fetching contacts:', error);
        } else {
          setContacts(data);
        }
      } catch (error) {
        console.error('Error fetching contacts:', error.message);
      }
    };

    fetchContacts();
  }, [supabase]);

  return (
    <div>
      <h1 className='wt-title'>
        List of contact messages
      </h1>
      <div className="not-prose -my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-slate-300">
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-6">
                    Firstname
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">
                    Lastname
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900">
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {contacts.map((contact) => (
                  <tr key={contact.email}>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">{contact.firstname}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">{contact.lastname}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500">{contact.email}</td>
                    <td>
                      <Link href={`/admin/contacts/${contact.id}`} className={"w-5 h-5 block bg-slate-200 hover:bg-blue-500 hover:text-white rounded-full"}>
                        <ChevronRightIcon className="h-5 w-5 " aria-hidden="true" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
