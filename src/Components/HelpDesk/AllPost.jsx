import { useEffect, useState } from "react";
import { IoIosTimer } from "react-icons/io";
import { Link } from "react-router-dom";
import { AiTwotoneLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import { MdInsertComment } from "react-icons/md";
import PostDropDown from "./PostDropDown";
import { Button, Modal } from "keep-react";
import { CloudArrowUp } from "phosphor-react";

const AllPost = () => {
  const [allPost, setAllPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://skill-dynamo-server.vercel.app/helpDeskPost`;

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setAllPost(data);
          setIsLoading(false);
        });
    }, 2000);
  }, [url]);

  const [showModal, setShowModal] = useState(false);
  const onClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="bg-blue-900 p-6 rounded-">
      {
        allPost.map(post => 
              <div key={post._id} className="mb-10 bg-blue-950 p-3 rounded-md">
        <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
        <div className="avatar">
          <div className="w-12 rounded-full bg-blue-600 p-1">
            <img src={post.photoURL} />
          </div>
        </div>
        <div>
        <p className="text-gray-50 font-semibold text-lg">{post.userName}</p>

        <p className="flex items-center gap-2 text-[9px]">
            <IoIosTimer className="text-blue-200"></IoIosTimer>
            <p className="text-gray-200">
            about an hour ago
            </p>
          </p>
        </div>
        </div>
            <PostDropDown></PostDropDown>
        </div>
        <h1 className="text-gray-50 font-bold text-xl py-3">{post.title}</h1>
        <p className="text-gray-300">{post.description}</p>

        <div className="mt-5 flex justify-between items-center text-xs">
        <Link className="flex items-center gap-3">
            <FcLike className=" text-blue-400"></FcLike>
            <p className="text-gray-200 font-semibold">
              100
            </p>
          </Link>
        <Link className="flex items-center gap-3">
            <MdInsertComment className=" text-blue-400"></MdInsertComment>
            <p className="text-gray-200 font-semibold">
              25
            </p>
          </Link>
        </div>

        <div className="mt-2 flex justify-between items-center border-y-2 border-gray-500 py-2">
        <Link className="flex items-center gap-3">
            <AiTwotoneLike className="text-xl text-blue-400"></AiTwotoneLike>
            <p className="text-gray-200 font-semibold text-base   ">
              Like
            </p>
          </Link>


{/* Comment box */}
          <div>
            <Button type='primary' onClick={onClick}>
            <Link className="flex items-center gap-3">
            <FaRegCommentDots className="text-xl text-blue-400"></FaRegCommentDots>
            <p className="text-gray-200 font-semibold text-base   ">
              Comment
            </p>
          </Link>
            </Button>
      <Modal
        size="lg"
        show={showModal}
        position="center"
      >
        <Modal.Header>
        <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
        <div className="avatar">
          <div className="w-12 rounded-full bg-blue-600 p-1">
            <img src={post.photoURL} />
          </div>
        </div>
        <div>
        <p className="font-semibold text-lg">{post.userName}</p>

        <p className="flex items-center gap-2 text-[9px]">
            <IoIosTimer className=""></IoIosTimer>
            <p className="">
            about an hour ago
            </p>
          </p>
        </div>
        </div>
            <PostDropDown></PostDropDown>
        </div>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-body-4 leading-relaxed text-metal-500">
            {post.description}
            </p>
          </div>

          <div className="mt-2 flex gap-8 items-center border-b-2 border-gray-500 py-2">
        <Link className="flex items-center gap-3">
            <AiTwotoneLike className="text-xl"></AiTwotoneLike>
            <p className="font-semibold text-base   ">
              Like
            </p>
          </Link>
            <Link className="flex items-center gap-3">
            <FaRegCommentDots className="text-xl"></FaRegCommentDots>
            <p className="font-semibold text-base   ">
              Comment
            </p>
          </Link>



        <Link to={`/postDetails/${post._id}`} className="flex items-center gap-3">
            <FiSend className="text-xl"></FiSend>
            <p className="font-semibold text-base   ">
              Share
            </p>
          </Link>
        </div>


        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClick}>
            Cancel
          </Button>
          <Button type="primary" onClick={onClick}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
        </div>



        <Link to={`/postDetails/${post._id}`} className="flex items-center gap-3">
            <FiSend className="text-xl text-blue-400"></FiSend>
            <p className="text-gray-200 font-semibold text-base   ">
              View Details
            </p>
          </Link>
        </div>
      </div>
            )
      }
    </div>
  );
};

export default AllPost;