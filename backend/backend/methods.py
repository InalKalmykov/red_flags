import pandas as pd
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def track_list_test():
    tracks = ['Track 1', 'Track 2', 'Track 3'] 

    return JsonResponse({'tracks': tracks})

def read_csv():
    try:
        df = pd.read_csv("data.csv")
        return df
    except:
        df = {'Name': [], 
              'Date': [],
              'Duration' : []}
        return pd.DataFrame(df)
        raise

def save_csv(df):
    df.to_csv("data.csv")

@require_http_methods(["GET"])
def get_track_list(request):
    if request.method == "GET":
        df = read_csv()
        try:
            json_data = df.to_json(orient='index')
            
            return JsonResponse({'code' : 0, 'data': json_data})
        
        except Exception as e:
            return JsonResponse({'code' : 1, 'error': str(e)}, status=400)
    


@require_http_methods(["GET"])
def get_track(request):
    if request.method == "GET" and request.GET['name']:
        df = read_csv()
        try:
            track = df[df['Name'] == request.GET['name']]
            if(len(track)==0):
                return JsonResponse({'code' : 1, 'error' : 'Track not found'}, status=400)
            track = track.to_json(orient='index')
            return JsonResponse({'code' : 0, 'data': track})
        
        except Exception as e:
            return JsonResponse({'code' : 1, 'error': str(e)}, status=400)
    
    return JsonResponse({'code' : 2, 'error' : f'Name request error {request.name}'}, status=400)
    
@require_http_methods(["GET"])
def create_track(request):
    if request.method == "GET":
        name = request.GET.get('name')
        text = request.GET.get('text')

        if not name or not text:
            return JsonResponse({'error': 'Name and text parameters are required'}, status=400)

        # Perform your track creation logic here
        try:
            # Example: Check if track already exists in a data source
            # Replace this with your actual data handling logic
            df = read_csv()

            track = df[df['Name'] == request.GET['name']]
            if(len(track)!=0):
                return JsonResponse({'code' : 1, 'error': 'Track with this name already exists'}, status=400)
            
            save_csv(pd.DataFrame({'name' : name, 'text' : text}))
            # Example: Save the new track to a database or file
            # Replace with your actual data saving logic
            # Save track logic here
            
            return JsonResponse({'message': 'Track created successfully'})
        
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=405)

@require_http_methods(["POST"])
def post_track(request):
    if request.method == "POST" and request.POST.get['name'] and request.FILES.get['track_file']:
        df = read_csv()
        try:
            track = df[df['Name'] == request.GET['name']]
            if(len(track)!=0):
                return JsonResponse({'code' : 1, 'error' : 'Track exist'}, status=400)
            
            save_csv(df)
            return JsonResponse({'code' : 0})
        
        except Exception as e:
            return JsonResponse({'code' : 1, 'error': str(e)}, status=400)
    
    return JsonResponse({'code' : 2, 'error' : f'Name request error {request.name}'}, status=400)
    