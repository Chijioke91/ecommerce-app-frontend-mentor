import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import plus from '../../images/icon-plus.svg';
import minus from '../../images/icon-minus.svg';
import cart from '../../images/icon-cart-white.svg';
import useItemContext from '../../context/useItemContext';
import Modal from '../modal';
import { images, thumbnails } from '../../utils';

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState(() => 125);
  const context = useItemContext();

  const total = amount * context.count;

  return (
    <div className="w-screen desktop:block mobile:px-0 desktop:px-80 mobile:py-6 desktop:pt-16 desktop:pb-24 mobile:overflow-hidden">
      <div className="flex desktop:space-x-28">
        <div className="mobile:hidden desktop:block relative">
          <div className={`w-96 rounded-lg overflow-hidden `}>
            <img src={images[0].image} alt="pix" />
          </div>

          <div className="absolute mt-6">
            <div className="flex space-x-5 cursor-pointer">
              {thumbnails.map((thumbnail, id) => (
                <div
                  key={id}
                  className={`w-20 h-20 hover:opacity-40 duration-300 hover:border-[2.5px] hover:bg-[#ff7d1a] hover:border-[#ff7d1a] rounded-lg`}
                  onClick={() => setIsOpen(true)}
                >
                  <img
                    src={thumbnail.thumbnail}
                    alt="thumbnail"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="desktop:mt-20">
          <div className="mobile:px-8 desktop:px-0 flex flex-col space-y-5">
            <div className="space-y-2">
              <h5 className="text-[#ff7d1a] font-bold uppercase  desktop:text-sm tracking-wide text-opacity-80 mobile:text-xs">
                Sneaker Company
              </h5>
              <h1 className="text-2xl desktop:text-4xl font-bold tracking-wide">
                Fall Limited Edition <br />
                Sneakers
              </h1>
            </div>
            <p className="text-[#68707d] text-sm">
              These low-profile sneakers are your perfect{' '}
              <br className="desktop:hdden" /> casual wear{' '}
              <br className="hidden desktop:block" /> companion. Featuring a
              durable <br className="desktop:hdden" /> rubber outer sole,
              they'll
              <br className="hidden desktop:block" />
              withstand everything <br className="desktop:hdden" /> the ewather
              can offer
            </p>
            <div className="mobile:flex items-center space-x-24 desktop:none">
              <div className="flex space-x-3">
                <h1 className="text-2xl font-extrabold tracking-wide">
                  {`$${amount}.00`}
                </h1>
                <span className="rounded-lg bg-[#ff7d1a] text-[#ff7d1a] px-3 text-sm font-black bg-opacity-[0.15] flex items-center justify-center">
                  50%
                </span>
              </div>
              <span className="block mt-1 line-through text-[#b6bcc8] font-semibold">
                $250.00
              </span>
            </div>

            <div className="flex mobile:flex-col desktop:flex-row mobile:space-y-4 desktop:space-y-0 desktop:space-x-5">
              <div className="bg-[#f7f8fd] flex items-center justify-between mobile:w-full desktop:w-36 h-6 rounded-lg py-6 px-4">
                <img
                  src={minus}
                  alt="minus"
                  onClick={context.decrement}
                  className="cursor-pointer"
                />
                <span className="font-semibold">{context.count}</span>
                <img
                  src={plus}
                  alt="plus"
                  onClick={context.increment}
                  className="cursor-pointer"
                />
              </div>
              <button
                type="submit"
                className="flex items-center  justify-center rounded-lg px-10 py-6 disabled:bg-opacity-30 bg-[#ff7d1a] text-white text-center mobile:w-full desktop:w-52 h-10"
                onClick={() => {
                  context.addToCart(
                    uuidv4(),
                    'Fall Limited Edition Sneakers',
                    context.count,
                    1,
                    amount,
                    total
                  );
                }}
                disabled={
                  context.count <= 0 || context.isClicked ? true : false
                }
              >
                <span className="flex items-center space-x-2">
                  <img src={cart} alt="cart" className="h-4 w-4 text-white" />
                  <span className="text-sm font-medium">
                    {context.isClicked ? 'Already Added' : 'Add to cart'}
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
