// pages/articles.js
import React, { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClients';
import { useUser } from '/context/UserContext'; 
import Link from 'next/link'; // Importez Link
import { useTheme} from "../../context/ThemeContext";

const Articles = () => {
  const { theme } = useTheme(); 
  const [articles, setArticles] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const { user, handleDisconnect } = useUser();
  const [articleForm, setArticleForm] = useState({
    id: null,
    title: '',
    content: '',
    picture_url: '',
    price: '',
    location: '',
    category: '',
    published: true,
    publish_date: new Date().toISOString(),
  });

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const { data, error } = await supabase
      .from('articles')
      .select('*');

    if (error) {
      console.log('Error', error);
    } else {
      setArticles(data);
    }
  };

  const handleInputChange = (e) => {
    setArticleForm({ ...articleForm, [e.target.name]: e.target.value });
  };

  const submitArticle = async () => {
    // Préparer les données pour la requête
    let requestData = {
      ...articleForm,
      user_id: user.id // Ajouter l'ID de l'utilisateur
    };
    if (!requestData.id) {
      delete requestData.id; // Supprimer l'id pour les nouveaux articles
    }
  
    const { data, error } = requestData.id
      ? await supabase.from('articles').update(requestData).match({ id: requestData.id })
      : await supabase.from('articles').insert([requestData]);
  
    if (error) {
      console.error('Error:', error);
      alert('An error occurred while processing your request.');

    } else {
      //setArticles(articleForm.id ? articles.map(a => a.id === data[0].id ? data[0] : a) : [...articles, data[0]]);
      setArticleForm({
        id: null,
        title: '',
        content: '',
        picture_url: '',
        price: '',
        location: '',
        category: '',
        published: true,
        publish_date: new Date().toISOString(),
      });
      setShowForm(false);
      alert('Article processed successfully!');

    location.reload();
    }
  };

  const startEdit = (article) => {
    setArticleForm(article);
    setShowForm(true);
  };

  const deleteArticle = async (id) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      const { error } = await supabase
        .from('articles')
        .delete()
        .match({ id });
  
      if (error) {
        console.log('Error', error);
        alert('An error occurred while deleting the article.');
      } else {
        setArticles(articles.filter(article => article.id !== id));
        alert('Article deleted successfully!');
      }
    }
  };

  const Layoutstyle = {
    backgroundColor: theme === 'dark' ? 'var(--background-color-dark)' : 'var(--background-color-light)',
    color: theme === 'dark' ? 'var(--text-color-dark)' : 'var(--text-color-light)',
    padding: "20px",
    textAlign: "center",
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl text-center font-bold mb-4">Articles</h1>
      {user&&(
      <button 
        onClick={() => { setArticleForm({
          id: null,
          title: '',
          content: '',
          picture_url: '',
          price: '',
          location: '',
          category: '',
          published: true,
          publish_date: new Date().toISOString(),
        }); setShowForm(!showForm); console.log(user);}}
         
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        {showForm ? 'Hide Form' : 'Create New Article'}
      </button>)}
      
      {user&& showForm && (
        <div className="max-w-lg mx-auto my-4 p-4 border rounded shadow-sm">
          <input className="w-full p-2 border rounded my-2" type="text" name="title" placeholder="Title" value={articleForm.title} onChange={handleInputChange} />
          <textarea className="w-full p-2 border rounded my-2" name="content" placeholder="Content" value={articleForm.content} onChange={handleInputChange}></textarea>
          <input className="w-full p-2 border rounded my-2" type="text" name="picture_url" placeholder="Picture URL" value={articleForm.picture_url} onChange={handleInputChange} />
          <input className="w-full p-2 border rounded my-2" type="number" name="price" placeholder="Price" value={articleForm.price} onChange={handleInputChange} />
          <input className="w-full p-2 border rounded my-2" type="text" name="location" placeholder="Location" value={articleForm.location} onChange={handleInputChange} />
          <input className="w-full p-2 border rounded my-2" type="text" name="category" placeholder="Category" value={articleForm.category} onChange={handleInputChange} />
          <input className="w-full p-2 border rounded my-2" type="date" name="publish_date" value={articleForm.publish_date} onChange={handleInputChange} />
          <button onClick={submitArticle} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full mt-4">
            {articleForm.id ? 'Update Article' : 'Submit New Article'}
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full">
      {articles.map(article => (
        <Link href={`/articles/${article.id}`} key={article.id}>
            <div className="border p-4 rounded transition duration-300 hover:bg-gray-200 rounded-lg h-full flex flex-col"
            style = {Layoutstyle}>
              <h2 className="text-xl font-semibold mb-2 cursor-pointer hover:underline">{article.title}</h2>
              {article.picture_url && (
                <img src={article.picture_url} alt={article.title} className="w-80 h-48 object-cover mb-2 rounded" />
              )}
              <p className="mb-2 flex-grow">{article.content}</p>
              {user && user.id === article.user_id && (
                <div className="flex justify-between mt-4">
                  <button onClick={() => startEdit(article)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded">
                    Edit
                  </button>
                  <button onClick={() => deleteArticle(article.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                    Delete
                  </button>
                </div>
              )}
            </div>
        </Link>
      ))}
    </div>
  </div>
  );
};

export default Articles;