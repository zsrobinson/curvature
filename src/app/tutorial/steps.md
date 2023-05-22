# Tutorial Steps

## Step 1: Define the Curve

To find the curvature of a curve, we first have to define the curve! The curve must be a set of parametric equations that are defined in terms of `t`, where both `x(t)` and `y(t)` are twice differentiable. That might sound complicated, but the best place to start is with something defined with sine and cosine. Here are the equations for the cycloid that we'll use throughout these examples.

```
x(t) = at-b\sin(t)
y(t) = a-b\cos(t)
```

This set of parametric equations will be referred to as `s` or `s(t)` throughout this tutorial.

## Step 2: Find the Unit Tangent Vector

The Unit Tangent Vector (T) is the tangent of the curve with a uniform length of one. To find T, we ust first find `ds/dt`, which is the rate of change of a point traveling along the curve with respect to time.

## Step 3: Find dT/ds

Our next step is to find the rate of change of the unit tangent vector with respect to the position of a point moving along the curve (dT/ds). We need to find this with respect to the curve instead of with respect to time because the curvature of the curve is not dependant on how fast a particle is traveling along the curve. We're finding geometry, not trajectory.

## Step 4: Find k and R

The last step is the easiest. We can find the curvature, `k`, by finding the magnitude of dT/ds. A straight portion of the curve will have a low `k` value, and a bendy part of the curve will have a high `k` value.

The radius of the circle that best fits the curve at any given point based on this `k` value is simply `R = 1 / k`.
