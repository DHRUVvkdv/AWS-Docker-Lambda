FROM public.ecr.aws/lambda/python:3.12

#Copy requirements.txt
COPY requirements.txt $(LAMBDA_TASK_ROOT)

# Install the function's dependencies using file
RUN pip install -r requirements.txt

# Copy function code
COPY src/* $(LAMBDA_TASK_ROOT)

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "app.handler" ]