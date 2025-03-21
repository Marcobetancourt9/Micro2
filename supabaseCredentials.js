import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://awvwytooyajimsvpwuim.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3dnd5dG9veWFqaW1zdnB3dWltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1MzUyMzEsImV4cCI6MjA1ODExMTIzMX0.T7W9vvtx1oqM_mJ2A81DI-6UnTQsJAX0YoKx8XLLXY0'

const supabase = createClient(supabaseUrl, supabaseKey);

export const uploadImage = async (file, bucket, folder) => {
  try {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()
      .toString(36)
      .substring(2, 15)}_${Date.now()}.${fileExt}`;

    const filePath = `${folder}/${fileName}`;

    const { error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    const { data: urlData } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath);

    return urlData.publicUrl;
  } catch (error) {
    console.error("Error al subir la imagen:", error);
    throw error;
  }
};