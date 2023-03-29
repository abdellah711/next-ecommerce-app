import Counter from "@/components/shared/Counter"
import CartIcon from '@heroicons/react/24/solid/ShoppingCartIcon'

import { urlFor } from "@/utils/img"
import Link from "next/link"
import CartItem from "@/components/cart/CartItem"
import CartSummary from "@/components/cart/CartSummary"

const data = [
    {
        quantity: 1,
        color: "Red",
        size: 6.5,
        product: {
            "id": 1,
            "attributes": {
                "title": "Apple iPhone XR",
                "short_description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt a doloribus iste natus et facere? dolor sit amet consectetur adipisicing elit. Sunt a doloribus iste natus et facere?",
                "stock": 6,
                "price": 999,
                "description": "# head\n## desc\n### sub\nlorem ",
                "featured": false,
                "createdAt": "2023-03-26T23:26:07.247Z",
                "updatedAt": "2023-03-28T15:12:48.182Z",
                "publishedAt": "2023-03-26T23:26:09.806Z",
                "old_price": 1200,
                "colors": [
                    "Red",
                    "Blue",
                    "Green"
                ],
                "sizes": [
                    6.5,
                    7
                ],
                "featured_image": {
                    "data": {
                        "id": 2,
                        "attributes": {
                            "name": "iphone5.jpg",
                            "alternativeText": null,
                            "caption": null,
                            "width": 304,
                            "height": 416,
                            "formats": {
                                "thumbnail": {
                                    "name": "thumbnail_iphone5.jpg",
                                    "hash": "thumbnail_iphone5_144dcd562e",
                                    "ext": ".jpg",
                                    "mime": "image/jpeg",
                                    "path": null,
                                    "width": 114,
                                    "height": 156,
                                    "size": 4.13,
                                    "url": "/uploads/thumbnail_iphone5_144dcd562e.jpg"
                                }
                            },
                            "hash": "iphone5_144dcd562e",
                            "ext": ".jpg",
                            "mime": "image/jpeg",
                            "size": 14.92,
                            "url": "/uploads/iphone5_144dcd562e.jpg",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "createdAt": "2023-03-26T23:25:29.133Z",
                            "updatedAt": "2023-03-26T23:25:29.133Z"
                        }
                    }
                }
            }
        }
    }
]

const CartPage = () => {

    return (
        <div className="content min-h-screen w-full">
            <h1 className="text-3xl py-7 text-zinc-700">
                <CartIcon className="w-8 h-8 inline-block mr-4 pb-1" />
                Cart
            </h1>
            <ul>
                {data.map((item) => (<CartItem key={item.product.id} {...item} />))}
            </ul>
            <div className="flex">
                <CartSummary/>
            </div>
        </div>
    )
}

export default CartPage