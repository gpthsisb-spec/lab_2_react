import { useEffect, useState } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Запитуємо дані (заміни '1' на свій варіант) 
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then(response => response.json())
      .then(data => setComments(data));
  }, []);

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Відгуки роботодавців</h2>
      <div className="grid gap-4">
        {comments.map(comment => (
          <div key={comment.id} className="p-4 border rounded-xl shadow-sm bg-gray-50">
            <p className="font-semibold text-blue-700">{comment.email}</p>
            <p className="text-gray-700 italic">"{comment.body}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;