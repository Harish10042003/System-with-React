import React from "react";
import {MdOutlineProductionQuantityLimits ,MdCategory ,MdOutlineFlagCircle ,MdDeliveryDining} from "react-icons/md";
import './App.css';
import { useState } from "react";

const mockOrders = [
    { id: 1, customerName: 'Harish', orderDate: '2024-03-10', status: 'Shipped' },
    { id: 2, customerName: 'Jayapal', orderDate: '2024-03-12', status: 'Processing' },
    { id: 3, customerName: 'Mathi', orderDate: '2024-03-14', status: 'Delivered' },
  ];
  
function Home() {

        const [products, setProducts] = useState([]);
        const [editingIndex, setEditingIndex] = useState(-1);
        const [formData, setFormData] = useState({ name: '', category: '', price: '', stockQuantity: '' });
      
        const handleFormChange = (event) => {
          const { name, value } = event.target;
          setFormData({ ...formData, [name]: value });
        };
        const submitProduct = (event) => {
            event.preventDefault();
            if (editingIndex >= 0) {
              products[editingIndex] = formData;
              setEditingIndex(-1);
            } else {
              setProducts([...products, formData]);
            }
            setFormData({ name: '', category: '', price: '', stockQuantity: '' });
          };
        
          const editProduct = (index) => {
            setFormData(products[index]);
            setEditingIndex(index);
          };
        
          const deleteProduct = (index) => {
            const newProducts = products.filter((_, i) => i !== index);
            setProducts(newProducts);
        };
        const [orders, setOrders] = useState(mockOrders);
        const [selectedOrder, setSelectedOrder] = useState(null);
        const viewDetails = (order) => {
        setSelectedOrder(order);
        };
        const updateStatus = (orderId, newStatus) => {
            const updatedOrders = orders.map(order => {
              if (order.id === orderId) {
                return { ...order, status: newStatus };
              }
              return order;
            });
            setOrders(updatedOrders);
        };
        const deleteOrder = (orderId) => {
            const updatedOrders = orders.filter(order => order.id !== orderId);
            setOrders(updatedOrders);
            if (selectedOrder && selectedOrder.id === orderId) {
              setSelectedOrder(null);
            }
        };



        
    return(
        <main className="main-container">
            <div className="main-title">
                <h1 className="head" id="dash">DASHBOARD</h1>
            </div>
            <div className="main-cards">
                <div className="card">
                 <div className="card-inner">
                     <h3>No.of.Products</h3>
                     <MdOutlineProductionQuantityLimits className="card_icon" />
                 </div>
                 <h1>1000</h1>
                </div>

            </div>
            <div className="main-cards">
                <div className="card">
                 <div className="card-inner">
                      <h3>Categories</h3>
                      <MdCategory className="card_icon" />
                 </div>
                 <h1>500</h1>
                </div>
               
            </div>
            <div className="main-cards">
               <div className="card">
                 <div className="card-inner">
                     <h3>No.of.Contries</h3>
                     <MdOutlineFlagCircle className="card_icon" />
                 </div>
                 <h1>120</h1>
               </div>
            </div>
            <div className="main-cards">
                <div className="card">
                 <div className="card-inner">
                     <h3>Orders</h3>
                     <MdDeliveryDining className="card_icon" />
                 </div>
                 <h1>10000+</h1>
                </div>
            </div>
            <div className="main-title">
                <h1 className="head" id="product">PRODUCT MANAGEMENT</h1>
            </div>
            <div> 
             <form onSubmit={submitProduct}>
                 <input
                 name="name"
                 value={formData.name}
                 onChange={handleFormChange}
                 placeholder="Name"
                 required
                 />
                 <input
                 name="category"
                 value={formData.category}
                 onChange={handleFormChange}
                 placeholder="Category"
                 required
                 />
                 <input
                 type="number"
                 name="price"
                 value={formData.price}
                 onChange={handleFormChange}
                 placeholder="Price"
                 required
                 />
                 <input
                 type="number"
                 name="stockQuantity"
                 value={formData.stockQuantity}
                 onChange={handleFormChange}
                 placeholder="Stock Quantity"
                 required
                 />
                 <button className="bnt" type="submit">{editingIndex >= 0 ? 'Edit' : 'Add'} Product</button>
                </form>
                <ul>
                  {products.map((product, index) => (
                      <li key={index}>
                         {product.name} - {product.category} - ${product.price} - Stock: {product.stockQuantity}
                         <button className="ebnt" onClick={() => editProduct(index)}>Edit</button>
                         <button className="dbnt" onClick={() => deleteProduct(index)}>Delete</button>
                        </li>
                    ))}
               </ul>
            </div>
            <div className="main-title">
                <h1 className="head" id="order">ORDERS MANAGEMENT</h1>
            </div>
            <div>
              <ul>
                 {orders.map((order) => (
                     <li key={order.id}>
                          {order.id} - {order.customerName} - {order.orderDate} - {order.status}
                          <button className="ebnt" onClick={() => viewDetails(order)}>View Details</button>
                          <button className="dbnt" onClick={() => deleteOrder(order.id)}>Delete</button>
                      </li>
                    ))}
             </ul>
             {selectedOrder && (
                 <div>
                      <h2 className="shead">Order Details</h2>
                      <p>ID: {selectedOrder.id}</p>
                      <p>Customer Name: {selectedOrder.customerName}</p>
                      <p>Order Date: {selectedOrder.orderDate}</p>
                      <p>Status: {selectedOrder.status}</p>
                      <button className="ebnt" onClick={() => updateStatus(selectedOrder.id, 'Shipped')}>Mark as Shipped</button>
                      <button className="dbnt" onClick={() => updateStatus(selectedOrder.id, 'Delivered')}>Mark as Delivered</button>
                  </div>
                )}
            </div>

        </main>
    );
}

export default Home