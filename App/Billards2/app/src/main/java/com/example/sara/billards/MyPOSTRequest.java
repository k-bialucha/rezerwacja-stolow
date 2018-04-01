package com.example.sara.billards;


import android.nfc.Tag;
import android.util.Log;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.RetryPolicy;
import com.android.volley.toolbox.JsonObjectRequest;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

class MyPOSTRequest extends JsonObjectRequest {
    private static final String TAG = "MyActivity";

    public MyPOSTRequest(String url, JSONObject jsonRequest,
                         Response.Listener<JSONObject> listener,
                         Response.ErrorListener errorListener) {
        super(Request.Method.POST, url, jsonRequest, listener, errorListener);
    }

    public static JSONObject createSampleObject(String date) {
        int tableId = 1;
        int userId = 1;
        int charge = 1;
        int hour = 1;

        JSONObject sampleObject = new JSONObject();

        try {
            sampleObject = sampleObject.put("ID_USER", userId);
            sampleObject = sampleObject.put("ID_TABLE", tableId);
            sampleObject = sampleObject.put("CHARGE", charge);
            sampleObject = sampleObject.put("HOUR_FROM", hour);
            sampleObject = sampleObject.put("HOUR_TO", hour+1);
            sampleObject = sampleObject.put("DATE", date);
        } catch(JSONException exception) {
            exception.printStackTrace();

        }
        return sampleObject;
    }

    @Override
    public Map<String, String> getHeaders() throws AuthFailureError {
        HashMap<String, String> headers = new HashMap<String, String>();
        headers.put("Content-Type", "application/json; charset=utf-8");
        headers.put("Accept", "application/json");
        return headers;
    }

    @Override
    public RetryPolicy getRetryPolicy() {
        // here you can write a custom retry policy
        return super.getRetryPolicy();
    }
}
