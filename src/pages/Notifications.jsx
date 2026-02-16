import React, { useEffect, useState } from "react";
import api from "../api";
import "./Notifications.css";

const Notifications = ({ user }) => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("hlopgToken");

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
      const res = await api.get("/web/notifications", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data.success) {
          setNotifications(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching notifications:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [token]);

  if (loading) return <p>Loading notifications...</p>;

  return (
    <div className="notifications-page">
      <h2>All Notifications</h2>

     {notifications.map((n) => (
  <div key={n.id} className="notification-card">
    <p>
      <strong>{n.userName}</strong> booked{" "}
      <strong>{n.hostelName}</strong>
    </p>

    <p>📞 {n.userPhone}</p>

    <p>🛏 {n.sharingType} Sharing</p>

    <small>
      {new Date(n.createdAt).toLocaleString()}
    </small>
  </div>
))}
    </div>
  );
};





export default Notifications;
