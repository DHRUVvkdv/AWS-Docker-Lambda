import numpy as np
def handler(event, context):
    body = "Hello Lambda!"
    random_numbers = np.random.rand(5)
    response = {
        "statusCode": 200,
        "body": {"message": body, "array": random_numbers.tolist()}
    }
    return response
