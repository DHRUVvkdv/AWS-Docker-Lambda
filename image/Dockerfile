FROM public.ecr.aws/lambda/python:3.12

# Set the working directory to the Lambda task root
WORKDIR ${LAMBDA_TASK_ROOT}

# Copy requirements.txt
COPY requirements.txt .

# Install dependencies
RUN pip install -r requirements.txt

# Copy function code
COPY src/* .

# Verify copied files
RUN ls -la ${LAMBDA_TASK_ROOT}

# Set the CMD to your handler
CMD [ "main.handler" ]
# FROM public.ecr.aws/lambda/python:3.12

# # Set the LAMBDA_TASK_ROOT environment variable
# ENV LAMBDA_TASK_ROOT /var/task

# # Set the working directory to the Lambda task root
# WORKDIR ${LAMBDA_TASK_ROOT}

# #Copy requirements.txt
# COPY requirements.txt ${LAMBDA_TASK_ROOT}

# # RUN pip install --upgrade pip
# # Install the function's dependencies using file
# RUN pip install -r requirements.txt

# # Copy function code
# COPY src/* $(LAMBDA_TASK_ROOT)

# # Verify copied files
# RUN ls -la ${LAMBDA_TASK_ROOT}

# # Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
# CMD [ "main.handler" ]
