"use client";
import React, { useState, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import axios from 'axios';
import {
  Type,
  Link as LinkIcon,
  Search,
  Save,
  CheckCircle,
  AlertCircle,
  Globe,
  FileText,
  Settings,
  Bold,
  Italic,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Quote,
  Image as ImageIcon,
  ExternalLink
} from 'lucide-react';

const MenuBar = ({ editor, onImageUpload }) => {
  if (!editor) return null;

  const addImage = () => {
    const url = window.prompt('Enter Image URL');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = await onImageUpload(file);
      if (url) {
        editor.chain().focus().setImage({ src: url }).run();
      }
    }
  };

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('Enter URL', previousUrl);
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  return (
    <div className="flex flex-wrap gap-1 p-2 border-b border-slate-200 bg-slate-50 sticky top-0 z-10">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 rounded hover:bg-slate-200 ${editor.isActive('bold') ? 'bg-blue-100 text-blue-600' : 'text-slate-600'}`}
        title="Bold"
      >
        <Bold size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 rounded hover:bg-slate-200 ${editor.isActive('italic') ? 'bg-blue-100 text-blue-600' : 'text-slate-600'}`}
        title="Italic"
      >
        <Italic size={16} />
      </button>
      <div className="w-px h-6 bg-slate-300 mx-1 self-center" />
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`p-2 rounded hover:bg-slate-200 ${editor.isActive('heading', { level: 1 }) ? 'bg-blue-100 text-blue-600' : 'text-slate-600'}`}
        title="H1"
      >
        <Heading1 size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-2 rounded hover:bg-slate-200 ${editor.isActive('heading', { level: 2 }) ? 'bg-blue-100 text-blue-600' : 'text-slate-600'}`}
        title="H2"
      >
        <Heading2 size={16} />
      </button>
      <div className="w-px h-6 bg-slate-300 mx-1 self-center" />
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded hover:bg-slate-200 ${editor.isActive('bulletList') ? 'bg-blue-100 text-blue-600' : 'text-slate-600'}`}
        title="Bullet List"
      >
        <List size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded hover:bg-slate-200 ${editor.isActive('orderedList') ? 'bg-blue-100 text-blue-600' : 'text-slate-600'}`}
        title="Ordered List"
      >
        <ListOrdered size={16} />
      </button>
      <div className="w-px h-6 bg-slate-300 mx-1 self-center" />
      <button
        onClick={setLink}
        className={`p-2 rounded hover:bg-slate-200 ${editor.isActive('link') ? 'bg-blue-100 text-blue-600' : 'text-slate-600'}`}
        title="Insert Link"
      >
        <ExternalLink size={16} />
      </button>
      <div className="relative">
        <button
          className="p-2 rounded hover:bg-slate-200 text-slate-600"
          title="Upload & Insert Image"
        >
          <ImageIcon size={16} />
          <input
            type="file"
            className="absolute inset-0 opacity-0 cursor-pointer"
            accept="image/*"
            onChange={handleFileChange}
          />
        </button>
      </div>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`p-2 rounded hover:bg-slate-200 ${editor.isActive('blockquote') ? 'bg-blue-100 text-blue-600' : 'text-slate-600'}`}
        title="Quote"
      >
        <Quote size={16} />
      </button>
    </div>
  );
};

const AdminPanel = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [metaDesc, setMetaDesc] = useState('');
  const [image, setImage] = useState('');
  const [uploading, setUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', msg: '' });

  const API_BASE = "https://digitalsuccesssolutions.in/php_backend/api"; // UPDATED TO LIVE SERVER

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      Image,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 underline cursor-pointer',
        },
      }),
    ],
    content: '<p>Start writing your amazing blog content here...</p>',
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'prose prose-slate max-w-none focus:outline-none min-h-[500px] p-6 bg-white',
      },
    },
  });

  // Fetch blogs on mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${API_BASE}/read.php`);
      setBlogs(res.data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  };

  // Auto-generate slug and meta title from blog title
  useEffect(() => {
    if (title && !metaTitle && !editingId) {
      setMetaTitle(title);
    }
    if (title && !slug && !editingId) {
      const generatedSlug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setSlug(generatedSlug);
    }
  }, [title, editingId]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    setUploading(true);
    try {
      const res = await axios.post(`${API_BASE}/upload.php`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setImage(res.data.url);
      setStatus({ type: 'success', msg: 'Image uploaded successfully!' });
    } catch (error) {
      setStatus({ type: 'error', msg: 'Image upload failed.' });
    } finally {
      setUploading(false);
    }
  };

  const saveBlog = async () => {
    if (!title || !editor.getHTML() || !slug) {
      setStatus({ type: 'error', msg: 'Please fill in all required fields!' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', msg: '' });

    const payload = {
      title,
      metaTitle,
      slug,
      metaDesc,
      image,
      content: editor.getHTML()
    };

    try {
      if (editingId) {
        await axios.post(`${API_BASE}/update.php?id=${editingId}`, payload);
        setStatus({ type: 'success', msg: '✅ Blog updated successfully!' });
      } else {
        await axios.post(`${API_BASE}/create.php`, payload);
        setStatus({ type: 'success', msg: '✅ Blog published successfully!' });
      }

      // Reset & Refresh
      cancelEdit();
      fetchBlogs();
    } catch (error) {
      setStatus({ type: 'error', msg: `❌ Action failed: ${error.response?.data?.message || error.message}` });
      console.error("Save failed:", error.response?.data || error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (blog) => {
    setEditingId(blog._id);
    setTitle(blog.title);
    setMetaTitle(blog.meta_title || blog.title);
    setSlug(blog.slug);
    setMetaDesc(blog.meta_desc || '');
    setImage(blog.image || '');
    editor.commands.setContent(blog.content);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setTitle('');
    setMetaTitle('');
    setSlug('');
    setMetaDesc('');
    setImage('');
    editor.commands.setContent('');
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      await axios.get(`${API_BASE}/delete.php?id=${id}`);
      fetchBlogs();
      setStatus({ type: 'success', msg: 'Blog deleted successfully.' });
    } catch (error) {
      setStatus({ type: 'error', msg: 'Failed to delete blog.' });
    }
  };

  const CharCounter = ({ current, target, label }) => {
    const isOptimal = current >= target * 0.8 && current <= target;
    const isOver = current > target;
    return (
      <div className="flex justify-between items-center text-xs mt-1">
        <span className="text-slate-500">{label}</span>
        <span className={`${isOver ? 'text-red-500' : isOptimal ? 'text-green-500' : 'text-slate-400'}`}>
          {current} / {target} characters
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div>
            <h1 className="text-3xl font-black text-slate-900 flex items-center gap-2">
              <Settings className="text-blue-600 animate-spin-slow" /> DSS <span className="text-blue-600">Admin</span>
            </h1>
            <p className="text-slate-500 font-medium">Precision SEO Content Management</p>
          </div>
          <div className="flex gap-3">
            {editingId && (
              <button
                onClick={cancelEdit}
                className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-6 py-3 rounded-xl font-bold transition-all"
              >
                CANCEL
              </button>
            )}
            <button
              onClick={saveBlog}
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-200 disabled:opacity-50"
            >
              {isSubmitting ? 'PROCESSING...' : <><Save size={20} /> {editingId ? 'UPDATE BLOG' : 'PUBLISH BLOG'}</>}
            </button>
          </div>
        </header>

        {status.msg && (
          <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300 ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
            {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
            <span className="font-semibold">{status.msg}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 transition-all hover:shadow-md">
              <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2 uppercase tracking-wider">
                <Type size={16} className="text-blue-500" /> Blog Headline (H1)
              </label>
              <input
                type="text"
                placeholder="Enter a power title for your blog..."
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-full p-4 text-2xl font-black border-2 border-slate-100 rounded-xl focus:border-blue-500 outline-none transition-all placeholder:text-slate-300"
              />
            </div>

            <div className="bg-white rounded-2xl shadow-xl border-2 border-slate-200 overflow-hidden transition-all hover:border-blue-400">
              <MenuBar
                editor={editor}
                onImageUpload={async (file) => {
                  const formData = new FormData();
                  formData.append('image', file);
                  try {
                    const res = await axios.post(`${API_BASE}/upload.php`, formData, {
                      headers: { 'Content-Type': 'multipart/form-data' }
                    });
                    return res.data.url;
                  } catch (err) {
                    setStatus({ type: 'error', msg: 'Content image upload failed.' });
                    return null;
                  }
                }}
              />
              <div className="bg-white min-h-[500px]">
                <EditorContent editor={editor} className="min-h-[500px] cursor-text" />
              </div>
            </div>
          </div>

          {/* SEO Sidebar */}
          <div className="space-y-6">
            {/* Thumbnail Upload */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2 border-b pb-2">
                <FileText size={18} className="text-blue-600" /> Thumbnail
              </h2>
              <div className="space-y-4">
                <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden border-2 border-dashed border-slate-200 flex flex-col items-center justify-center relative group">
                  {image ? (
                    <>
                      <img src={image} alt="Preview" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <label className="cursor-pointer bg-white text-black px-4 py-2 rounded-lg font-bold text-sm">CHANGE IMAGE</label>
                      </div>
                    </>
                  ) : (
                    <div className="text-center p-4">
                      <FileText className="mx-auto text-slate-300 mb-2" size={32} />
                      <p className="text-xs font-bold text-slate-400">Click to upload thumbnail</p>
                    </div>
                  )}
                  <input type="file" onChange={handleImageUpload} className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" />
                </div>
                {uploading && <p className="text-xs text-blue-500 font-bold animate-pulse text-center">Uploading Image...</p>}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2 border-b pb-2">
                <Globe size={18} className="text-blue-600" /> SEO Optimization
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase mb-1">SEO Meta Title</label>
                  <input
                    type="text"
                    placeholder="Search engine title..."
                    value={metaTitle}
                    onChange={e => setMetaTitle(e.target.value)}
                    className="w-full p-3 border-2 border-slate-50 rounded-xl focus:border-blue-400 outline-none font-medium bg-slate-50/50"
                  />
                  <CharCounter current={metaTitle.length} target={60} label="Optimal: 50-60 chars" />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase mb-1">Permalink / Slug</label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-slate-400"><LinkIcon size={14} /></span>
                    <input
                      type="text"
                      placeholder="url-path-here"
                      value={slug}
                      onChange={e => setSlug(e.target.value)}
                      className="w-full pl-9 pr-3 py-3 border-2 border-slate-50 rounded-xl bg-slate-50/80 text-slate-600 text-sm font-bold outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase mb-1">Meta Description</label>
                  <textarea
                    placeholder="Provide a compelling summary..."
                    value={metaDesc}
                    onChange={e => setMetaDesc(e.target.value)}
                    rows={4}
                    className="w-full p-3 border-2 border-slate-50 rounded-xl focus:border-blue-400 outline-none text-sm font-medium bg-slate-50/50 resize-none"
                  />
                  <CharCounter current={metaDesc.length} target={160} label="Optimal: 120-160 chars" />
                </div>
              </div>
            </div>

            {/* Google Preview */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Search size={14} /> Search Preview
              </h2>
              <div className="max-w-full overflow-hidden font-sans">
                <div className="text-[#1a0dab] text-[18px] leading-tight hover:underline cursor-pointer truncate mb-1">
                  {metaTitle || title || 'Your Page Title Shows Here'}
                </div>
                <div className="text-[#006621] text-sm mb-1 truncate">
                  https://dss.secure/{slug || 'your-url-slug'}
                </div>
                <div className="text-[#4d5156] text-[14px] leading-snug line-clamp-2">
                  {metaDesc || 'Start typing a meta description to see how your post will appear in Google search results...'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Existing Blogs Section */}
        <section className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <FileText className="text-blue-600" /> MANAGING BLOGS
            </h2>
            <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold">
              {blogs.length} Total Posts
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div key={blog._id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 group hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="aspect-video bg-slate-200 relative overflow-hidden">
                  {blog.image ? (
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  ) : (
                    <div className="flex items-center justify-center h-full text-slate-400 font-bold italic">No Image</div>
                  )}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-600 shadow-sm">
                    {blog.category || 'SEO'}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-slate-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">{blog.title}</h3>
                  <p className="text-slate-500 text-xs line-clamp-2 mb-4 font-medium">{blog.meta_desc || 'No description available.'}</p>

                  <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between gap-3">
                    <button
                      onClick={() => handleEdit(blog)}
                      className="flex-1 bg-slate-900 text-white py-2 rounded-xl text-xs font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-1"
                    >
                      EDIT
                    </button>
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="bg-red-50 text-red-500 p-2 rounded-xl hover:bg-red-500 hover:text-white transition-all"
                    >
                      <AlertCircle size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};


export default AdminPanel;
