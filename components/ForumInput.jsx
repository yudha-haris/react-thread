import React from 'react';
import PropTypes from 'prop-types';
import TextInputField from './TextInputField';
import TextAreaField from './TextAreaField';
import useInput from '../hooks/useInput';

function ForumInput({ post }) {
  const [title, onTitleChange] = useInput('');
  const [content, onContentChange] = useInput('');

  return (
    <div className="p-6 bg-white max-w-2xl mx-auto my-4 rounded-2xl">
      <h1 className="text-2xl font-bold">Apa yang ingin Anda diskusikan</h1>
      <TextInputField placeholder="Judul" value={title} onChange={onTitleChange} />
      <div className="h-4" />
      <TextAreaField placeholder="Konten" value={content} onChange={onContentChange} />
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => post({ title, content })}
          className="px-6 py-2 w-1/3 text-white bg-purple-600 rounded-md hover:bg-purple-500 mt-6"
        >
          Buat Forum
        </button>
      </div>
    </div>
  );
}

ForumInput.propTypes = {
  post: PropTypes.func.isRequired,
};

export default ForumInput;
