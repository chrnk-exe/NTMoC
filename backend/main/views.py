from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import render
from .algs import *


ALGORITHM_CLASSES = {
    'bin_gcd': BinGcd,
    'ext_bin_gcd': ExtBinGcd,
    'karatsuba': Karatsuba,
    'solve_comparison': SolveComparison
}


class MainPageView(APIView):
    def get(self, request):
        return render(request, 'index.html')


class SolveTaskView(APIView):

    def get(self, request):
        alg_key = request.query_params.get('alg_key', None)
        args = request.query_params.get('args', None)

        if alg_key is None or args is None:
            return Response('alg_key and args required', status=status.HTTP_400_BAD_REQUEST)

        alg_class = ALGORITHM_CLASSES.get(alg_key)

        if alg_class is None:
            return Response('unknown alg_key', status=status.HTTP_400_BAD_REQUEST)

        args = list(map(int, args.split(',')))
        alg = alg_class(*args)
        answer = alg.solve()

        return Response(answer, headers={'Access-Control-Allow-Origin': '*'})
