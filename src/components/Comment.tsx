import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps{
  content:string;
  onDeleteComment:(comment: string) => void
}


export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount]= useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleOneLikeComment(){
    setLikeCount(likeCount+1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/mithrasdeLuca-dev.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTimes}>
              <strong>Sophia Dante</strong>
              <time title="11 de maio as 8:13" dateTime="2022-05-11 8:13:30">Publicado há 1h </time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content} 👏👏</p>
        </div>
        <footer>
          <button onClick={handleOneLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}