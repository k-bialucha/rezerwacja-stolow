package com.example.sara.billards;


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

    public MyPOSTRequest(String url, JSONObject jsonRequest,
                         Response.Listener<JSONObject> listener,
                         Response.ErrorListener errorListener) {
        super(Request.Method.POST, url, jsonRequest, listener, errorListener);
    }

    public static JSONObject createSampleObject() {
        Random generator = new Random();
        int tableId = generator.nextInt(2)+1;
        int userId = generator.nextInt(3)+1;
        int charge = generator.nextInt(60)+12;
        int hour = generator.nextInt(10)+12;
        int year = generator.nextInt(30)+1990;
        JSONObject sampleObject = new JSONObject();
        try {
            sampleObject = sampleObject.put("ID_USER", userId);
            sampleObject = sampleObject.put("ID_TABLE", tableId);
            sampleObject = sampleObject.put("CHARGE", charge);
            sampleObject = sampleObject.put("HOUR_FROM", hour);
            sampleObject = sampleObject.put("HOUR_TO", hour+2);
            sampleObject = sampleObject.put("DATE", year+"-01-01");
        } catch(JSONException exception) {

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
