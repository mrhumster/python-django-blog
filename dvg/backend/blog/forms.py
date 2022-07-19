from django.forms import ModelForm, Textarea
from blog.models import Post


class PostModelForm(ModelForm):
    class Meta:
        model = Post
        fields = '__all__'
        widgets = {
            'body': Textarea(attrs={'cols': 3, 'rows': 5})
        }
