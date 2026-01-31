import { useEffect, useState } from "react";
import "./VisitorCounter.scss";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase = null;
const getSupabaseClient = async () => {
  if (!supabase) {
    const { createClient } = await import("@supabase/supabase-js");
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  }
  return supabase;
};

const VisitorCounter = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const requestIdle = window.requestIdleCallback || ((cb) => setTimeout(cb, 0));
    const cancelIdle = window.cancelIdleCallback || clearTimeout;

    const idleCallback = requestIdle(
      async () => {
        try {
          const supabaseClient = await getSupabaseClient();
          const counted = sessionStorage.getItem("visitorCounted") === "true";

          if (counted) {
            // Just fetch current count
            const { data, error } = await supabaseClient
              .from("visitor_counter")
              .select("count")
              .eq("id", 1)
              .single();

            if (error) throw error;

            if (isMounted) {
              setCount(Number(data?.count ?? 0));
            }
          } else {
            // Increment counter
            const { data, error } = await supabaseClient.rpc(
              "increment_visitor_counter",
            );

            if (error) throw error;

            sessionStorage.setItem("visitorCounted", "true");

            if (isMounted) {
              setCount(Number(data ?? 0));
            }
          }
        } catch (error) {
          console.error("Visitor counter error:", error);
          if (isMounted) {
            setCount(0);
          }
        } finally {
          if (isMounted) {
            setLoading(false);
          }
        }
      },
      { timeout: 3000 }
    );

    return () => {
      isMounted = false;
      cancelIdle(idleCallback);
    };
  }, []);

  const formatCount = (num) => {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1) + "M";
    }

    if (num >= 1_000) {
      return (num / 1_000).toFixed(1) + "K";
    }

    return num.toString();
  };

  return (
    <div className="visitor-counter">
      <div className="counter-text">
        {loading ? (
          <span className="loading">...</span>
        ) : (
          <>
            <span className="count">{formatCount(count)}</span>
            <span className="label">visitors</span>
          </>
        )}
      </div>
    </div>
  );
};

export default VisitorCounter;
