import numpy as np
def handler(event, context):
    body = "Hello Lambda!"
    random_numbers = np.random.rand(5)
    response = {
        "statusCode": 200,
        "body": body,
        "random_numbers": random_numbers.tolist()
    }
    return response
